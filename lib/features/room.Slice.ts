import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialRoomState, RoomModel, ReviewModel, BookingModel, AddressModel, AccountResultModel, AccountCancelModel } from '../../app/model/room.model';
import { RootState } from '../store';

export const roomSlice = createSlice({
    name: 'room',
    initialState: initialRoomState,
    reducers: {
        saveRooms: (state, action: PayloadAction<RoomModel[]>) => {
            state.rooms = action.payload;
        },
        saveCurrentRoom: (state, action: PayloadAction<RoomModel | null>) => {
            state.currentRoom = action.payload;
        },
        saveReviews: (state, action: PayloadAction<ReviewModel[]>) => {
            state.reviews = action.payload;
        },
        saveCurrentReview: (state, action: PayloadAction<ReviewModel | null>) => {
            state.currentReview = action.payload;
        },
        saveBookings: (state, action: PayloadAction<BookingModel[]>) => {
            state.bookings = action.payload;
        },
        saveCurrentBooking: (state, action: PayloadAction<BookingModel | null>) => {
            state.currentBooking = action.payload;
        },
        saveAddresses: (state, action: PayloadAction<AddressModel[]>) => {
            state.addresses = action.payload;
        },
        saveCurrentAddress: (state, action: PayloadAction<AddressModel | null>) => {
            state.currentAddress = action.payload;
        },
        saveAccountResult: (state, action: PayloadAction<AccountResultModel | null>) => {
            state.accountResult = action.payload;
        },
        saveAccountCancel: (state, action: PayloadAction<AccountCancelModel | null>) => {
            state.accountCancel = action.payload;
        },
        saveLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        saveError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

// Selector 함수들
export const getRooms = (state: RootState) => state.room.rooms;
export const getCurrentRoom = (state: RootState) => state.room.currentRoom;
export const getReviews = (state: RootState) => state.room.reviews;
export const getCurrentReview = (state: RootState) => state.room.currentReview;
export const getBookings = (state: RootState) => state.room.bookings;
export const getCurrentBooking = (state: RootState) => state.room.currentBooking;
export const getAddresses = (state: RootState) => state.room.addresses;
export const getCurrentAddress = (state: RootState) => state.room.currentAddress;
export const getAccountResult = (state: RootState) => state.room.accountResult;
export const getAccountCancel = (state: RootState) => state.room.accountCancel;
export const getIsLoading = (state: RootState) => state.room.isLoading;
export const getError = (state: RootState) => state.room.error;

// 액션 생성자들을 export
export const {
    saveRooms,
    saveCurrentRoom,
    saveReviews,
    saveCurrentReview,
    saveBookings,
    saveCurrentBooking,
    saveAddresses,
    saveCurrentAddress,
    saveAccountResult,
    saveAccountCancel,
    saveLoading,
    saveError,
} = roomSlice.actions;

// 리듀서를 export
export default roomSlice.reducer;