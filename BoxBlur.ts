// My prev resolution
function boxBlur(image : number[][]) {
    const color_blur = image.map(e=>e.length).reduce((a,b) => a + b)
    return [[Math.floor(image.map((i) => i.reduce((a,b)=>a+b)).reduce((a,b)=>a+b) / color_blur)]]
}



const image = [[1,2,3],[123,123,123],[234,234,234]]
// const image = [[1,1,1],[1,7,1],[1,1,1]]

console.log(boxBlur(image))


//Course resolution

function boxBlur2(image : number[][]) :number[][] {
    const res : number[][] = []
    for(let y = 0; y< image.length - 2;y++) {
        const line : number[] = []
        for(let x = 0; x < image[y].length -2; x++){
            let sum = 0
            let count = 0
            for(let a = y; a < y + 3; a++) {
                for(let b = x; b < x+3; b++){
                    sum += image[a][b]
                    count++
                }
            }
            line.push(Math.floor(sum/count))
        }
        res.push(line)
    }
    return res
}

console.log(boxBlur(image))
