export interface IRecipe {
	recipeId: number;
	name: string;
	description: string;
	prepTime: string;
	cookTime: string;
	totalTime: string;
	makingAmount: string;
	imageUrl: string;
	ingredients: string[];
	additions1: string[];
	additions2: string[];
	additions3: string[];
	directions: string[];
	tips: string[];
}

export interface IPaginatedGeneric<Type> {
	totalCount: number;
	pageSize: number;
	currentPage: number;
	totalPages: number;
	items: Type[];
}

export interface IBean {
	beanId: number;
	groupName: string[];
	ingredients: string[];
	flavorName: string;
	description: string;
	colorGroup: string;
	backgroundColor: string;
	imageUrl: string;
	glutenFree: boolean;
	sugarFree: boolean;
	seasonal: boolean;
	kosher: boolean;
}

export interface IMileStone {
	mileStoneId: number
	year: number
	description: string
}

export interface IFact {
	factId: number
	title: string
	description: string
}

export interface ICombination {
	combinationId: number
	name: string
	tag: string[]
}

export interface IPayload {
	pageIndex: number
	pageSize: number
}