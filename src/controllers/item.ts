import { Request, Response } from "express"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item";
import { handleHttp } from "../utils/error.handle"

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await getCar(id);
        const data = responseItem ? responseItem : 'NOT_FOUND';

        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const responseItems = await getCars();

        res.send(responseItems);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await updateCar(id, body);

        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);

        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await deleteCar(id);
        
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }