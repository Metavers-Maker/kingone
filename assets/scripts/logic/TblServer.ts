
/**
 *  tbl server, use read ,parse tbl data
*/

export class TblServer {

    public static m_inst: TblServer | null = null;

    public tbldata: any = null;

    static inst() {
        if (this.m_inst === null) {
            this.m_inst = new TblServer();
        }
        return this.m_inst;
    }

    public init(jsonData: any) {
        //
        this.tbldata = jsonData;
        console.log("TblServer init", this.tbldata);
    }

}

