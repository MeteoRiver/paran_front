export interface BookState {
    books: BookResponseModel[];
    likedBooks: LikeBookModel[];
    currentBook: BookResponseModel | null;
    isLoading: boolean;
    error: string | null;
}

// 초기 상태
export const initialBookState: BookState = {
    books: [],
    likedBooks: [],
    currentBook: null,
    isLoading: false,
    error: null
};

export interface BookResponseModel {
    id: number;
    title: string;
    author: string;
    categoryName: string;
    likeBookCount: number;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
}

export interface LikeBookModel {
    id?: number;
    nickname: string;
    bookId: number;
    title?: string;
    author?: string;
    categoryName?: string;
    likeBookCount?: number;
}