import {ExceptionResponseModel} from "@/app/model/error.model";
import requests from "@/app/api/requests";
import api from "@/app/api/axios";
import {BookResponseModel, LikeBookModel} from "@/app/model/group/book.model";

import {
    GroupModel,
    GroupPostModel,
    GroupPostResponseModel,
    GroupResponseModel,
    JoiningModel,
} from "@/app/model/group/group.model";


export const groupPostAPI = {
    insert(groupPostModel: GroupPostModel){
        return api.post<GroupPostResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/posts', groupPostModel);
    },
    modify(groupPostModel: GroupPostModel){
        return api.put<GroupPostResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/posts', groupPostModel);
    },
    drop(boardId: number){
        return api.delete<Boolean | ExceptionResponseModel>(requests.fetchGroups + `/posts/${boardId}`);
    },
    findByGroupId(groupId: number, page: number, size: number, postCategory: string){
        return api.get<Page<GroupPostResponseModel>>(requests.fetchGroups + `/posts/${groupId}`, {
            params: {page, size, postCategory}
        });
    },
    modifyViewCount(postId: number){
        return api.put<GroupPostResponseModel | ExceptionResponseModel>(requests.fetchGroups + `/posts/${postId}`);
    }
}

export default groupPostAPI;