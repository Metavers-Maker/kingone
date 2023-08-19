import { Prefab } from "cc";
import { HeroQuality } from "../../base/CDef";


export class CHero {
    public m_name: string = "default";
    public m_unlock: boolean = false;
    public m_qulity: HeroQuality = HeroQuality.E_HERO_QUA_A;
    public m_res: Prefab | null = null;
}

