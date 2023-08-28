import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera } from "cc";
import { CHeroMgr } from "../../hero/CHeroMgr";
import { CBatWar } from "../CBatWar";
const { ccclass, property } = _decorator;

@ccclass("CBatMonsterMove")
export class CBatMonsterMove extends Component {

    public m_move_speed: number = 50;

    public m_cur_pos: Vec3 | null = new Vec3(0, 0, 0);

    public m_atk_range: number = 150;

    public create(_atk_range: number) {
        this.m_atk_range = _atk_range;
    }

    protected onLoad(): void {

    }

    protected start(): void {
        this.m_cur_pos = this.node.getPosition();
        this.node.setScale(new Vec3(-1, 1, 1));
        console.log("CBatMonsterMove start", this.m_cur_pos);
    }

    protected onDestroy(): void {

    }

    protected update(dt: number): void {
        //
        let t_hero = CHeroMgr.inst().m_cur_hero;
        let t_target_pos: Vec3 | null = new Vec3(0, 0, 0);
        if (t_hero !== null && CBatWar._self) {
            CBatWar._self.getWarPos(t_hero.getWorldPosition(), t_target_pos);
        };
        this.m_cur_pos = this.node.position;
        let t_move_dis = dt * this.m_move_speed;
        if (t_target_pos) {
            if (this.m_cur_pos.x - t_target_pos.x <= this.m_atk_range) {
                return;
            }
            let t_dis = Vec3.distance(this.m_cur_pos, t_target_pos);
            if (t_dis > this.m_atk_range) {
                this.m_cur_pos.x = this.m_cur_pos.x - t_move_dis;
                this.node.setPosition(this.m_cur_pos);
            }
            // console.log("CBatMonsterMove update", t_target_pos.x, this.m_cur_pos.x, this.node.uuid);
        }
    }
}
