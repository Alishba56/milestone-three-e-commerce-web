import whiteglass from "../images/whitesunglass.png"
import elegance from "../images/Elegance.png"
import men from "../images/men.png"
import women    from  "../images/women.png"

export interface category
    {
        id: number,
        name: string,
        Image?: string,
    }
const category=[
    {
        id: 1,
        name: "White Sun Glass",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        Image:whiteglass,
},
    {
        id: 2,
        name: "Echo Elegance",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        Image:elegance,
},
    {
        id: 3,
        name: "Men",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        Image:men,

},    
    {
        id: 4,
        name: "women"   ,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

        Image:women,

},]

export default category;