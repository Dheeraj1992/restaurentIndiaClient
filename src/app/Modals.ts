import { Data } from "@angular/router/src/config";

export class User
{
    userId:string;
    password:string;
    username:string;
    firstname:string;
    lastname:string;
    mobile:string;
    email:string;
    imageUrl:string;
    isAdmin:boolean;
    dateAdded:Date;
    dateModified:Date;
    cart : Cart;
}

export class CategoryGroup
{
    groupId: number;
    groupName: string;
    categories: Array<Category>;
}

export class Category
{
    categoryId: number;
    categoryName: string;
    dateAdded: Date;
    dateModified: Date;
    isActive: boolean;
    isDeleted: boolean;
    categoryGroupId: number;
    subcategories: Array<Subcategory>;
}

export class Subcategory
{
    subcategoryId: number;
    subcategoryName: string;
    categoryId: number;
    dateAdded: Date;
    dateModified: Date;
    isActive: boolean;
    isDeleted: boolean;
    products: Array<Product>;
}

export class Product
{
    productId: number;
    productName: string;
    productDescription: string;
    price: number;
    subcategoryId: number;
    imageUrl: string;
    
    hasOffer: boolean;
    offerPercent: number;
    addedBy: number;
    dateAdded: Date;
    updatedBy: number;
    dateModified: Date;
    isActive: Boolean;
}

export class Cart {
	cartId: number;
    dateCreated: Date;
}