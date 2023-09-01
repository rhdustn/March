import LottoService from "../service/lottoService";
import Strategy from "./strategy";
import { Lottofour } from "./lotto4";
import { Lotto8 } from "./lotto8";
import { Lotto12 } from "./lotto12";

const strategy = new Strategy();

strategy.set(4, new Lottofour());
strategy.set(8, new Lotto8());
strategy.set(12, new Lotto12());

const lottoService = new LottoService(strategy)
lottoService.lotto(4);
lottoService.lotto(8);
lottoService.lotto(12);