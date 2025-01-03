import sneakers from '../images/sneakers.png'
import urban from '../images/Urban .png'
import velvet from "../images/Velvet .png"
import summit from "../images/summit.png"
import zenith from '../images/Zenith.png'
import Elegance from '../images/Elegance.png'
import pumps from '../images/Pumps.png'
import blaze from '../images/Blaze.png'
import whiteglass from "../images/whitesunglass.png"
import womens from "../images/women.png"
import mens from "../images/men.png"
export interface data
    {
        id: number,
        name: string,
        price: number,
        image: string,
        slug?: string,
        link?: string,
        description?: string,
        category?: string,
        count?: number,
    }
 export const productData=[
   
    {
        id: 1,
        name: "Sole Elegance",
        slug: "sole",
        link:"/productcart/sole",
        price: 10,
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: sneakers
    },
    {
        id: 2,
        name: "Urban Sneakers",
        slug: "urban",
        link:"/productcart/urban",
        price: 12,
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: urban
    },
    {
        id: 3,
        name: "Velvet Boots",
        slug: "velvet",
        link:"/productcart/velvet",
        price: 14,
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: velvet
    },
    {
        id: 4,
        name: "Summit Hiking",
        slug: "summit",
        link:"/productcart/summit",
        price: 12,
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: summit
    },
    {
        id: 5,
        name: "Zenith Glow",
        slug: "zenith",
        link:"/productcart/zenith",
        price: 15,
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: zenith
    },
    {
        id: 6,
        name: "Echo Elegance    ",
        slug: "echo",
        link:"/productcart/echo",
        price: 14,
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: Elegance
    },
    {
        id: 7,
        name: "Pumps",
        slug: "pumps",
        link:"/productcart/pumps",
        price: 14,
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: pumps
    },
    {
        id: 8,
        name: "Blaze Burst",
        slug: "blaze",
        link:"/productcart/blaze",
      
        price: 14,
        describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: blaze
    }

 ]
 export const glass =[
    {
        
            id: 1,
            slug: "white",
            link:"/productcart/white",
            name: "White Sun Glass",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 10,
            Image:whiteglass,
    },
    {
        id: 2,
        slug: "black",
        link: "/productcart/black",
        name: "Black Sun Glass",
        desc: "Classic black sun glass to elevate your look.",
        price: 15,
        Image: whiteglass,
    },
    {
        id: 3,
        slug: "blue",
        link: "/productcart/blue",
        name: "Blue Sun Glass",
        desc: "Vibrant blue sun glass for a bold statement.",
        price: 12,
        Image: whiteglass,
    },
    {
        id: 4,
        slug: "green",
        link: "/productcart/green",
        name: "Green Sun Glass",
        desc: "Trendy green sun glass perfect for summer days.",
        price: 14,
        Image: whiteglass,
    },
    {
        id: 5,
        slug: "red",
        link: "/productcart/red",
        name: "Red Sun Glass",
        desc: "Elegant red sun glass with a splash of color.",
        price: 18,
        Image: whiteglass,
    },
    {
        id: 6,
        slug: "gold",
        link: "/productcart/gold",
        name: "Gold Sun Glass",
        desc: "Premium gold sun glass for a luxurious look.",
        price: 25,
        Image: whiteglass,
    },
    {
        id: 7,
        slug: "pink",
        link: "/productcart/pink",
        name: "Pink Sun Glass",
        desc: "Chic pink sun glass to complement your style.",
        price: 20,
        Image: whiteglass,
    },
    {
        id: 8,
        slug: "silver",
        link: "/productcart/silver",
        name: "Silver Sun Glass",
        desc: "Sophisticated silver sun glass for modern aesthetics.",
        price: 22,
        Image: whiteglass,
    },
 ]
 export const women =[
    {
        
            id: 1,
            slug: "women",
            link:"/productcart/women",
            name: "women",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 10,
            Image:womens,
    },
    
        {
            id: 2,
            slug: "women-dress",
            link: "/productcart/women-dress",
            name: "Dress",
            desc: "Elegant and stylish dress for all occasions.",
            price: 30,
            Image: womens
        },
        {
            id: 3,
            slug: "women-top",
            link: "/productcart/women-top",
            name: "Top",
            desc: "Comfortable and chic top for casual wear.",
            price: 15,
            Image: womens
        },
        {
            id: 4,
            slug: "women-jeans",
            link: "/productcart/women-jeans",
            name: "Jeans",
            desc: "Perfect fit jeans for a flattering look.",
            price: 25,
            Image: womens
        },
        {
            id: 5,
            slug: "women-jacket",
            link: "/productcart/women-jacket",
            name: "Jacket",
            desc: "Cozy and stylish jacket for cold weather.",
            price: 40,
            Image: womens
        },
        {
            id: 6,
            slug: "women-skirt",
            link: "/productcart/women-skirt",
            name: "Skirt",
            desc: "Trendy skirt for day-to-night wear.",
            price: 20,
            Image:womens
        },
        {
            id: 7,
            slug: "women-shoes",
            link: "/productcart/women-shoes",
            name: "Shoes",
            desc: "Comfortable and fashionable shoes.",
            price: 50,
            Image: womens
        },
        {
            id: 8,
            slug: "women-bag",
            link: "/productcart/women-bag",
            name: "Bag",
            desc: "Stylish bag to complement any outfit.",
            price: 35,
            Image: womens
        },
        {
            id: 9,
            slug: "women-scarf",
            link: "/productcart/women-scarf",
            name: "Scarf",
            desc: "Soft and warm scarf for winter days.",
            price: 18,
            Image:womens
        }
    ]
    
 export const men =[
    {
        
            id: 1,
            slug: "men",
            link:"/productcart/men",
            name: "men",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 10,
            Image:mens,
    },
    {
        id: 2,
        slug: "men-shirt",
        link: "/productcart/men-shirt",
        name: "Shirt",
        desc: "Casual yet stylish shirt for everyday wear.",
        price: 20,
        Image: mens,
    },
    {
        id: 3,
        slug: "men-pants",
        link: "/productcart/men-pants",
        name: "Pants",
        desc: "Comfortable and durable pants for any occasion.",
        price: 30,
        Image:mens,
    },
    {
        id: 4,
        slug: "men-jacket",
        link: "/productcart/men-jacket",
        name: "Jacket",
        desc: "Versatile jacket to keep you warm and stylish.",
        price: 50,
        Image: mens,
    },
    {
        id: 5,
        slug: "men-shoes",
        link: "/productcart/men-shoes",
        name: "Shoes",
        desc: "Fashion-forward shoes for a sharp look.",
        price: 60,
        Image: mens,
    },
    {
        id: 6,
        slug: "men-tshirt",
        link: "/productcart/men-tshirt",
        name: "T-shirt",
        desc: "Comfortable and breathable T-shirt for casual wear.",
        price: 15,
        Image:mens,
    },
    {
        id: 7,
        slug: "men-sweater",
        link: "/productcart/men-sweater",
        name: "Sweater",
        desc: "Cozy sweater for chilly days.",
        price: 35,
        Image: mens,
    },
    {
        id: 8,
        slug: "men-cap",
        link: "/productcart/men-cap",
        name: "Cap",
        desc: "Stylish cap to complete your casual look.",
        price: 18,
        Image: mens,
    },
    {
        id: 9,
        slug: "men-belt",
        link: "/productcart/men-belt",
        name: "Belt",
        desc: "Leather belt to match with your outfit.",
        price: 25,
        Image: mens,
    },
    {
        id: 10,
        slug: "men-wallet",
        link: "/productcart/men-wallet",
        name: "Wallet",
        desc: "Sleek wallet to keep your essentials organized.",
        price: 40,
        Image:mens,
    }
 ]