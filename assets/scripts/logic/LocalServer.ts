
export class LocalServer {

    public static m_inst: LocalServer | null = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new LocalServer();
        }
        return this.m_inst;
    }

    public init() {
        //
    }

}

