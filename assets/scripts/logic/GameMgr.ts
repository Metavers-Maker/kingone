
/**
 * game mgr ,programme entry
*/

import { CPlayer } from "./entity/CPlayer";
import { CUser } from "./entity/CUser";

export class GameMgr {

    public static m_inst: GameMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new GameMgr();
        }
        return this.m_inst;
    }
    

    public m_user: CUser = new CUser();

    public m_player: CPlayer = new CPlayer();

    public init() {
        //

    }

}

