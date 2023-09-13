export interface IBlockHeader{
    version : string
    height : number
    timestamp : number
    previoushash : string
}

export interface IBlock extends IBlockHeader{
    merkleRoot : string
    hash : string
    nonce : number;
    difficulty : number
    data : string[];
}