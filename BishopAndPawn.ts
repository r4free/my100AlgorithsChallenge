

function bishopAndPawn(bishopPosition : String, pawnPosition: String) : Boolean
{
    const letters = ["a","b","c","d","e","f","g","h"]
    const bishopCords = [ letters.indexOf(bishopPosition[0])+1, Number(bishopPosition[1])]
    const pawnCords = [ Number(letters.indexOf(pawnPosition[0])+1), Number(pawnPosition[1])]
    return (bishopCords[0] + pawnCords[1]) == (bishopCords[1] + pawnCords[0])
    
}

console.log(bishopAndPawn("c2","d3"))