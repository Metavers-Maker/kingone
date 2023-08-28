
/**
 *  local server use for parse and save
*/

export class CLocalServer {

    public static m_inst: CLocalServer | null = null;

    public tbldata: any = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new CLocalServer();
        }
        return this.m_inst;
    }

    public init() {
        //
    }

    public saving() {

    }

    public pasring() {

    }

}

