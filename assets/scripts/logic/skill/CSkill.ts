import { Prefab } from "cc";
import { HeroQuality } from "../../base/CDef";


export class CSkill {
    public m_name: string = "default";
    public m_unlock: boolean = false;
    public m_res: Prefab | null = null;
}

