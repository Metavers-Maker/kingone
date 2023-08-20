import { _decorator, Component, Node, Prefab, instantiate, Vec3, Camera } from "cc";
import { BatBulletMode } from "../../../base/CDef";
const { ccclass, property } = _decorator;

@ccclass("CBatBullet")
export class CBatBullet extends Component {

    public m_bullet_mode: BatBulletMode = BatBulletMode.E_BULLET_MODE_DIR;

    public m_target: Node | null = null;

    public m_dir: Vec3 = new Vec3(1.0, 0.0, 0.0);

    public m_speed: number = 50;

    public m_cur_pos: Vec3 = new Vec3(1.0, 0.0, 0.0);

    public init(_mode: BatBulletMode) {
        this.m_bullet_mode = _mode;
    }

    protected onLoad(): void {

    }

    protected start(): void {

    }

    protected onDestroy(): void {
        //
    }

    protected update(dt: number): void {

        this.m_cur_pos = this.node.getPosition();
        //bullet fly dis
        let t_dis = this.m_speed * dt;
        if (this.m_bullet_mode === BatBulletMode.E_BULLET_MODE_DIR) {
            //
        } else if (this.m_bullet_mode === BatBulletMode.E_BULLET_MODE_TARGET) {
            if (this.m_target && this.m_target.isValid) {
                let t_target_pos = this.m_target.getPosition();
                let t_real_dis = Vec3.distance(this.m_cur_pos, t_target_pos);
                if (t_dis >= t_real_dis) {
                    //collider or cross
                    t_dis = t_real_dis;
                }
                //计算方向
                Vec3.subtract(this.m_dir, t_target_pos, this.m_cur_pos);
                this.m_dir.normalize();
            }
        }
        //
        this.m_cur_pos.x = this.m_cur_pos.x + this.m_dir.x * t_dis;
        this.m_cur_pos.y = this.m_cur_pos.y + this.m_dir.y * t_dis;
        this.node.setPosition(this.m_cur_pos);
        console.log("bullet pos", this.m_cur_pos, t_dis, this.m_dir);
    }
}
