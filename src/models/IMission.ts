import * as Sequelize from "sequelize";

export interface MissionAttribute {
    id:string;
    missionname?:string;
    currentstate?:string;
}

export interface MissionInstance extends Sequelize.Instance<MissionAttribute>, MissionAttribute{

}

export interface AccountModel extends Sequelize.Model<MissionInstance, MissionAttribute>{
    
}