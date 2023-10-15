import { useEffect, useRef, useState } from 'react';
import artList from '../data';
import CustomCurser from '../asset/brush.png';
import styled from 'styled-components';

const Container = styled.main`
  width: 1410px;
  height: 860px;
  display: flex;
  flex-direction: row;
`;

const CanvasWrapper = styled.section`
  cursor: url(${CustomCurser}), auto;
  flex: 1.2;
  overflow: hidden;
  background-image: url(${(props) => props.$url});
  background-size: 100% 100%;
`;

const Info = styled.section`
  padding-left: 50px;
  justify-content: center;
  align-items: center;
  font-family: 'Jost';
  font-size: 28px;
  background-color: #0010ff;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 52px;
`;

const Canvas = () => {
  let inSideArray = [];
  let dataArray = [];
  const canvasRef = useRef(null);
  const contextRef = useRef(null); // 캔버스 드로잉 컨텍스트 참조
  const [isdrawing, setIsDrawing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  const [ctx, setCtx] = useState(); // 캔버스 드로잉 컨텍스트
  const [canvasTag, setCanvasTag] = useState();

  useEffect(() => {
    const CanvasInit = () => {
      const canvas = canvasRef.current;
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      setCanvasTag(canvas);
      const context = canvas.getContext('2d');
      contextRef.current = context; // 그림 그리는것에 필요한 메서드는 contextRef.current 기준으로 작동
      setCtx(contextRef.current);
      drawFrame(context, canvas);
    };
    CanvasInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawFrame = (context, canvas) => {
    const backImg = new Image(); // 프레임에 이미지 넣어주는 작업
    backImg.src = artList[currentImageIndex].img;
    backImg.onload = () => {
      context.drawImage(backImg, 0, 0, canvas.width, canvas.height);
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % artList.length
      );
    };
  };

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const inSide = (_x, _y, maxSize, size) => {
    let inter = null;
    if (inSideArray.length >= maxSize) {
      setIsDrawing(false); // 그림 그리기 그만
      let i = 1;
      inter = setInterval(() => {
        //페이드 인아웃 효과
        ctx.save();
        ctx.beginPath();
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.rect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = `rgba(0,0,0,${i})`;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
        if (i <= 0) {
          clearInterval(inter);
          drawFrame(ctx, canvasTag); // 다음 그림 이미지
          inter = null;
        }
        setCurrentInfoIndex((currentInfoIndex + 1) % artList.length); // 다음 그림 정보

        //페이드 인아웃용 배열
        dataArray.forEach((item) => {
          ctx.save();
          ctx.beginPath();
          ctx.globalCompositeOperation = 'destination-out';
          ctx.arc(
            item.x,
            item.y,
            size,
            (Math.PI / 180) * 0,
            (Math.PI / 180) * 360,
            false
          );
          ctx.fill();
          ctx.closePath();
          ctx.restore();
        });
        i -= 0.1;
      }, 50);
    }
  };

  // nativeEvent 설명, 주석 달아놓기
  // 그림 그리기
  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent; // 마우스 좌표값
    const parent = canvasRef.current.parentElement;
    const width = parent.clientWidth;
    const height = parent.clientHeight;
    let size = 95; // 지우개 크기
    let row = height / size / 1.97;
    let column = width / size / 1.97;
    let maxSize = row * column;

    if (isdrawing === false || !ctx) return;

    inSide(offsetX, offsetY, maxSize, size, width, height);

    let check = inSideArray.filter((arg) => {
      let x = offsetX - arg.x;
      let y = offsetY - arg.y;
      let len = Math.sqrt(Math.abs(x * x) + Math.abs(y * y));
      return len < size;
    });

    let json = { x: offsetX, y: offsetY, target: false };
    if (!check || check.length === 0) {
      json.target = true;
      inSideArray.push(json); //대상원을 추가 합니다
    }
    dataArray.push(json);

    // 드로잉 시작
    ctx.save();
    ctx.beginPath();
    ctx.globalCompositeOperation = 'destination-out'; // 블렌딩 모드 이미 그려진 그림 일부를 제거
    ctx.arc(
      offsetX,
      offsetY,
      size,
      (Math.PI / 180) * 0,
      (Math.PI / 180) * 360,
      false
    );
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  };

  return (
    <Container>
      <CanvasWrapper $url={artList[currentImageIndex].img}>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={drawing}
        ></canvas>
      </CanvasWrapper>
      <Info>
        <Title>{artList[currentInfoIndex].title}</Title>
        <p>{artList[currentInfoIndex].year}</p>
        <p>{artList[currentInfoIndex].medium}</p>
      </Info>
    </Container>
  );
};

export default Canvas;
