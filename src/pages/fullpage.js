import Canvas from '../component/Canvas';
import Header from '../component/Header';

const Fullpage = () => {
  // const cheerio = require('cheerio');
  // const [artList, setArtList] = useState([
  //   { title: '', year: '', medium: '', img: '' },
  // ]);

  // const getHtml = async () => {
  //   return await axios.get('/ko/artists/30-austin-lee/');
  // };

  // const test = () => {
  //   getHtml().then((html) => {
  //     console.log(html.data);
  //     const $ = cheerio.load(html.data);
  //     const $arts = $('ul>li.item');
  //     const tmp = [];

  //     $arts.each(function (i, element) {
  //       tmp[i] = {
  //         title: $(this).find('span.title_and_year_title').text(),
  //         year: $(this).find('span.title_and_year_year').text(),
  //         medium: $(this).find('div.medium').text(),
  //         img: $(this)
  //           .find('span.image img')
  //           .attr('data-responsive-src')
  //           .substring(
  //             $(this)
  //               .find('span.image img')
  //               .attr('data-responsive-src')
  //               .indexOf('http'),
  //             $(this)
  //               .find('span.image img')
  //               .attr('data-responsive-src')
  //               .indexOf('.jpg')
  //           ),
  //       };
  //     });
  //     setArtList(tmp);
  //     console.log(tmp);
  //   });
  // };

  // useEffect(() => {
  //   test();
  // }, []);

  return (
    <>
      <Header></Header>
      <Canvas></Canvas>
    </>
  );
};
export default Fullpage;
