const artList = [
  {
    title: 'Dancers',
    year: '2023',
    medium: 'Painting - Acrylic on canvas ',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/ee2196648b16531e3c9bdc1a88a68f08j/peresprojects-austin-lee-dancers-2023',
  },
  {
    title: 'Growth',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/d1b60c228831b689ee6ffecabe62f798j/peresprojects-austin-lee-growth-2020',
  },
  {
    title: 'Side Eye',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/d0e5f8e59d55cd5e3c8117ba76fc5ed9j/peresprojects-austin-lee-side-eye-2020',
  },
  {
    title: 'humans',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/697bb0afbcc1cab7b7301e3da1acaccaj/peresprojects-austin-lee-humans-2020',
  },
  {
    title: 'UUCAT',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/7456976134589dc18cd57dafa105b65cj/peresprojects-austin-lee-uucat-2020',
  },
  {
    title: 'Relaxed Guy with Flowers',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/eeeb84b531e3f4906c59b3244b6a69a1j/peresprojects-austin-lee-relaxed-guy-with-flowers-2020',
  },
  {
    title: 'HORSES',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/8681c6651a7dec149fe7b9bcb3145e6ej/peresprojects-austin-lee-horses-2020',
  },
  {
    title: 'ANGEL',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/fe3cc08c18e144172960461505be27acj/peresprojects-austin-lee-angel-2020',
  },
  {
    title: 'Solacers',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/3252d0075c94e22ec4de0e8ea0120a0cj/peresprojects-austin-lee-solacers-2020',
  },
  {
    title: 'SNAFU',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/f46498362e6ee239dabf1331b12f0d33j/peresprojects-austin-lee-snafu-2020',
  },
  {
    title: 'Julia',
    year: '2020',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/b8e86702f7d30aa639bf36c1a147d475j/peresprojects-austin-lee-julia-2020',
  },
  {
    title: 'bluerelllaaaax',
    year: '2020',
    medium:
      'Sculpture - Foam and fiber reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/dcf9ded0dc7aa2a66ae54a6b67075397j/peresprojects-austin-lee-bluerelllaaaax-2020',
  },
  {
    title: 'flowerbear',
    year: '2020',
    medium:
      'Sculpture - Foam and fiber reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/59c7bff94cc3b29bf3949fed1149d3dcj/peresprojects-austin-lee-flowerbear-2020',
  },
  {
    title: 'Family',
    year: '2019',
    medium:
      'Sculpture - Foam and fiberglass reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/3c40e317010cf9ee51f224485f77626aj/peresprojects-austin-lee-family-2019',
  },
  {
    title: 'Babyface',
    year: '2019',
    medium:
      'Sculpture - Foam and fiber reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/32ae6c76f97a2fc3adb540487835a801j/peresprojects-austin-lee-babyface-2019',
  },
  {
    title: 'mr austin',
    year: '2019',
    medium:
      'Sculpture - Foam and fiber reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/ad245ead92f4326e630660c07f72fe30j/peresprojects-austin-lee-mr-austin-2019',
  },
  {
    title: 'Horse Stack',
    year: '2019',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/c1794d0fd10ddc56901cc3c73e145d15j/peresprojects-austin-lee-horse-stack-2019',
  },
  {
    title: 'Trio',
    year: '2019',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/e0d2545bf0c3fbd9d578d34534e02164j/peresprojects-austin-lee-trio-2019',
  },
  {
    title: 'booox',
    year: '2019',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/0ec854565091bdec8f180cdc3b458b6bj/peresprojects-austin-lee-booox-2019',
  },
  {
    title: 'Motion',
    year: '2019',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/b03d8efdd682cdda63a2d1f6c3acdf8bj/peresprojects-austin-lee-motion-2019',
  },
  {
    title: 'Little Dance',
    year: '2019',
    medium: 'Sculpture - 3-D printed bronze, paint',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/055a11b53595355de4b6510847450a27j/peresprojects-austin-lee-little-dance-2019',
  },
  {
    title: 'Dog',
    year: '2019',
    medium:
      'Sculpture - Foam and fiber reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/96e70e18e9b0b8bc6d9bc32937c3ce06j/peresprojects-austin-lee-dog-2019',
  },
  {
    title: 'Tree',
    year: '2019',
    medium:
      'Sculpture - Foam and fiber reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/9cdc3ae0d0efc405d5a80446eaeb6bb1j/peresprojects-austin-lee-tree-2019',
  },
  {
    title: 'RELAXGUY',
    year: '2019',
    medium:
      'Sculpture - Foam and fiberglass reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/a9cf132c1dcab81d8bef21d3b990c95cj/peresprojects-austin-lee-relaxguy-2019',
  },
  {
    title: 'Cat',
    year: '2019',
    medium:
      'Sculpture - Foam and fiber reinforced painted resin, steel armature, acrylic',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/7c7025560dae8ca88287525852231cbfj/peresprojects-austin-lee-cat-2019',
  },
  {
    title: 'b painting',
    year: '2019',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/26e091545d1bd75b4a146709a9765d77j/peresprojects-austin-lee-b-painting-2019',
  },
  {
    title: 'Floating Flower',
    year: '2019',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/a8cb796a242564437f215d6f86741866j/peresprojects-austin-lee-floating-flower-2019',
  },
  {
    title: 'Laying in Grass Smelling Flowers',
    year: '2019',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/7e75c664a5a2578411e9d57ecdffae6dj/peresprojects-austin-lee-laying-in-grass-smelling-flowers-2019',
  },
  {
    title: 'Persons',
    year: '2019',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/43dd73b92c9d4c6e2e9c3a2e5837c0b8j/peresprojects-austin-lee-persons-2019',
  },
  {
    title: 'Empire',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/45ecfd791107b08dff76beb0ec9e03d1j/peresprojects-austin-lee-empire-2018',
  },
  {
    title: 'Lean',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/a9e5bac3d8bfaabdad923cc0041988ecj/peresprojects-austin-lee-lean-2018',
  },
  {
    title: 'GoodLookingDog',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/34bfd6424009a227d0d18f96f3a17e65j/peresprojects-austin-lee-goodlookingdog-2018',
  },
  {
    title: 'ApplePick',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/8baed93eef5a09fed97cd77c78672b30j/peresprojects-austin-lee-applepick-2018',
  },
  {
    title: 'SnakeEyes',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/7b40807150bfa81a4538d203690eb758j/peresprojects-austin-lee-snakeeyes-2018',
  },
  {
    title: 'Hang',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/496d8957cb248f3e35aa1e74eca873f4j/peresprojects-austin-lee-hang-2018',
  },
  {
    title: 'RIP',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/12cd014ac3e300a5aa74752576d4b559j/peresprojects-austin-lee-rip-2018',
  },
  {
    title: 'SlowDance',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/b71c9208cbeb539a3ae3abbc54106f93j/peresprojects-austin-lee-slowdance-2018',
  },
  {
    title: 'DoubleHead',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/16b66b4c62bad8d4dc80bd676e2c852dj/peresprojects-austin-lee-doublehead-2018',
  },
  {
    title: 'Mass Hysteria',
    year: '2018',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/2e8a5a0b9e2129afcf5182c2dea2b938j/peresprojects-austin-lee-mass-hysteria-2018',
  },
  {
    title: 'Puppy Love',
    year: '2017',
    medium: 'Painting - Acrylic on canvas',
    img: 'https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/peresprojects/images/view/82fa5a0fa18857f0d3dea1ca02910a08j/peresprojects-austin-lee-puppy-love-2017',
  },
];

export default artList;
