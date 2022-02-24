const productData = [
    {
        id:1,
        image:'https://i.imgur.com/gV1HmRc.jpeg',
        title:'BLACK GREASY',
        price: 690.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'adidas',
        sellCount:10,
        color:'black',
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        avgRating:3,
        createdAt:'12/12/2021'
    },
    {
        id:2,
        image:'https://i.imgur.com/fVIEC3e.jpeg',
        title:'BLACK GREASY',
        price: 250.9,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'adidas',
        sellCount:5,
        color:'black',
        avgRating:2,
        createdAt:'14/5/2021',
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.'
    },
    {
        id:3,
        image:'https://i.imgur.com/CU93N9r.jpeg',
        title:'BLACK GREASY',
        price: 990.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'adidas',
        sellCount:5,
        color:'grown',
        avgRating:1,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'9/10/2021'
    },
    {
        id:4,
        image:'https://i.imgur.com/uwSA3dL.jpeg',
        title:'BLACK GREASY',
        price: 600.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'diamond',
        sellCount:7,
        color:'grown',
        avgRating:4,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'12/12/2021'
    },
    {
        id:5,
        image:'https://i.imgur.com/uwSA3dL.jpeg',
        title:'BLACK GREASY',
        price: 506.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'diamond',
        sellCount:4,
        color:'grown',
        avgRating:5,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'12/2/2021'
    },
    {
        id:6,
        image:'https://i.imgur.com/fVIEC3e.jpeg',
        title:'BLACK GREASY',
        price: 700.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'diamond',
        sellCount:9,
        color:'grown',
        avgRating:4,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'18/5/2021'
    },
    {
        id:7,
        image:'https://i.imgur.com/fVIEC3e.jpeg',
        title:'BLACK GREASY',
        price: 220.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'converse',
        sellCount:6,
        color:'white',
        avgRating:2,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'9/9/2021'
    },
    {
        id:8,
        image:'https://i.imgur.com/CU93N9r.jpeg',
        title:'BLACK GREASY',
        price: 100.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'converse',
        sellCount:12,
        color:'white',
        avgRating:2,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'19/4/2021'
    },
    {
        id:9,
        image:'https://i.imgur.com/CU93N9r.jpeg',
        title:'BLACK GREASY',
        price: 900.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'converse',
        sellCount:1,
        color:'yellow',
        avgRating:1,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'29/7/2021'
    },
    {
        id:10,
        image:'https://i.imgur.com/CU93N9r.jpeg',
        title:'BLACK GREASY',
        price: 700.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'etnies',
        sellCount:9,
        color:'yellow',
        avgRating:4,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'26/2/2021'
    },
    {
        id:11,
        image:'https://i.imgur.com/fVIEC3e.jpeg',
        title:'BLACK GREASY',
        price: 900.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'etnies',
        sellCount:20,
        color:'black',
        avgRating:3,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'28/12/2021'
    },
    {
        id:12,
        image:'https://i.imgur.com/fVIEC3e.jpeg',
        title:'BLACK GREASY',
        price: 500.00,
        discount:2,
        discountPrice: 20 - 2 / 100 * 20,
        quantity:1,
        brand:'converse',
        sellCount:6,
        color:'black',
        avgRating:4,
        description:'Nam vehicula ipsum tortor, ac tristique diam scelerisque in. Duis at interdum erat. Phasellus euismod risus dolor, eu semper velit pellentesque nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrice.',
        createdAt:'19/9/2021'
    },
  
]


export default productData