import { LottoNumber } from "../interface/lottoInterface";
import { Authenticator, AuthenticationResponse } from "./Authenticator";

export class Lotto12 implements Authenticator {
    async lottoShow(): Promise<AuthenticationResponse> {
        console.log("12개의 번호 추첨");
        
        let Numarr: number[] = [];
        for (let i = 1; i <= 45; i++) {
            Numarr.push(i);
        }
        let LottoShow: number[] = [];
        // 3. 6개의 무작위 번호 선택
        for (let i = 0; i < 12; i++) {
            let indexRandom = Math.floor(Math.random() * Numarr.length);
            let number = Numarr[indexRandom];
            
            LottoShow.push(number);

            Numarr.splice(indexRandom, 1);
        }

        console.log("선택된 로또 번호:", LottoShow);

        return { 
            success: true,
            result:[] 
        };
    }
}
