
/**
 * res manager ,use load res / prefab
*/

export class CResMgr {

    public static m_inst: CResMgr | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CResMgr();
        }
        return this.m_inst;
    }

    protected m_callback: Function | null = null;
    protected m_target: any = null;

    public init(_callback: Function, _target: any) {
        //
        this.m_callback = _callback;
        this.m_target = _target;
    }

    public loadRes() {
        //
        this.loadHero();
    }

    public loadHero() {
        if (this.m_callback && this.m_target) {
            this.m_callback(this.m_target, 10);
        }
        this.loadEquip();
    }

    public loadEquip() {
        if (this.m_callback && this.m_target) {
            this.m_callback(this.m_target, 20);
        }
        this.loadPet();
    }

    public loadPet() {
        if (this.m_callback && this.m_target) {
            this.m_callback(this.m_target, 80);
        }
        this.loadLevel();
    }

    public loadLevel() {
        if (this.m_callback && this.m_target) {
            this.m_callback(this.m_target, 100);
        }
    }

}

