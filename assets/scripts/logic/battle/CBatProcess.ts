import { CBatUnit } from "./CBatUnit";


export class CBatProcess {

    //伤害计算
    public static batCompute(src: CBatUnit, target: CBatUnit) {
        let hitnum = Math.max(src.m_atk - target.m_def, 0);
        let isDead = target.decHp(hitnum);
        if (isDead) {
            //死亡 发送死亡消息
        }
        return isDead;
    }

}

