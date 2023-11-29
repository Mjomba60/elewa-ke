export interface CardImgTxtInterface{
    bgcolor: string,
    color: string,
    img: Img,
    text: Txt
}

interface Img{
    src: string,
    order: string
}

interface Txt{
    order: string,
    head: string,
    main: string | string[]
}