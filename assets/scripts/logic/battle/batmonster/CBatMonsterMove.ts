import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera } from "cc";
import { CHero } from "../../hero/CHero";
import { CHeroMgr } from "../../hero/CHeroMgr";
const { ccclass, property } = _decorator;

@ccclass("CBatMonsterMove")
export class CBatMonsterMove extends Component {

    public m_move_speed: number = 50;

    public m_cur_pos: Vec3 | null = null;

    public m_atk_range: number = 150;

    protected onLoad(): void {

    }

    protected start(): void {
        this.m_cur_pos = this.node.position;
        this.node.setScale(new Vec3(-1, 1, 1));
    }

    protected onDestroy(): void {

    }

    protected update(dt: number): void {
        //
        let t_hero = CHeroMgr.inst().m_cur_hero;
        let t_target_pos: Vec3 | null = null;
        if (t_hero !== null) {
            t_target_pos = t_hero.position;
        };
        //
        this.m_cur_pos = this.node.position;
        let t_move_dis = dt * this.m_move_speed;
        if (t_target_pos) {
            if (this.m_cur_pos.x - this.m_atk_range <= t_target_pos.x) {
                return;
            }
            let t_dis = Vec3.distance(this.m_cur_pos, t_target_pos);
            if (t_dis > this.m_atk_range) {
                this.m_cur_pos.x = this.m_cur_pos.x - t_move_dis;
                this.node.setPosition(this.m_cur_pos);
            }
            console.log("CBatMonsterMove update", t_target_pos.x, this.m_cur_pos.x, this.node.uuid);
        }
    }
}