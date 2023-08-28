
import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera } from "cc";
import { CBatWar } from "./CBatWar";
import { CBatDirector } from "./CBatDirector";
import { CResMgr } from "../ResMgr";
import { CHurtNum } from "../../effect/CHurtNum";
const { ccclass, property } = _decorator;
/**
 * use for hero ,enemy, boss for base number
*/

@ccclass("CBatUnit")
export class CBatUnit extends Component {

    //攻击范围
    public m_atk_range: number = 150;
    //攻击力
    public m_atk: number = 0;
    //防御
    public m_def: number = 0;
    //血量
    public m_hp: number = 0;
    //暴击率
    public m_crit_rate: number = 0;
    //暴击伤害
    public m_crit_hurt: number = 0;
    //当前血量
    public m_hp_cur: number = 0;
    //
    public m_link_id: string = "0";

    public createByHero() {
        //
    }

    public createByCLS(_chapter: number, _level: number, _step: number) {
        //根据 章节-关卡-进度 初始化batunit
        this.m_hp = _chapter * 1000 + _level * 100 + _step * 10 + 10;
        this.m_hp_cur = this.m_hp;
    }

    public decHp(hurt: number) {
        this.m_hp_cur = this.m_hp_cur - hurt;
        if (this.m_hp_cur <= 0) {
            //死亡
            this.node.removeFromParent();
            this.node.destroy();
            CBatWar._self?.node.emit("MSG_ENT_DEAD", this.node, "monster");
            return true;
        }
        return false;
    }

    protected onLoad(): void {
    }

    protected start(): void {
    }

    protected onDestroy(): void {
    }

    protected update(dt: number): void {
    }

    public onHit(atk: number) {
        if (!CBatWar._self) {
            return;
        }
        let hurtNode = CResMgr.inst().createNode("prefab/effect/hurtnum");
        if (hurtNode) {
            let hurtNum = hurtNode.getComponent("CHurtNum") as CHurtNum;
            if (hurtNum) {
                hurtNum.create(atk);
            }
            let hurtpos: Vec3 = new Vec3();
            CBatWar._self.getWarPos(this.node.position, hurtpos);
            hurtNode.setPosition(this.node.position);
            //
            console.log("monster pos", this.node, this.node.position, hurtNode);
            CBatWar._self?.node.addChild(hurtNode);
        }
        //
        this.decHp(atk);
    }
}



