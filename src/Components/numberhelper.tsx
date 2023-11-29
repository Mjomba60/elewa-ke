export default function NumberHelper({stats}:any){
    return (
        <div id="statnums">
            <p>{stats.name}</p>
            <p>{stats.definition}</p>
        </div>
    )
}