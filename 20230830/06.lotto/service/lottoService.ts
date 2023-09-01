import { LottoNumber } from "../interface/lottoInterface";
import Strategy from "../strategy/strategy";
import { AuthenticationResponse } from "../strategy/Authenticator";

class LottoService{
    constructor(private readonly strategy : Strategy){}

    async lotto(type:number) : Promise<AuthenticationResponse>{
        const result = await this.strategy.lotto(type)
        return result
    }
    }
    
    export default LottoService