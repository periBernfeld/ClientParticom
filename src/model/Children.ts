import User from "./User";

export default class Children{
    constructor(
                public Name :string,
                public ChildTz:string,
                public BirthDate :Date,
                public ParentId :number,
              ){

                }
}