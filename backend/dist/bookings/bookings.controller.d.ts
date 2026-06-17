import { BookingsService } from './bookings.service';
import { Prisma } from '@prisma/client';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(createBookingDto: Prisma.BookingCreateInput): Promise<{
        villa: {
            name: string;
            areaObj: {
                name: string;
            } | null;
        } | null;
    } & {
        id: string;
        villaId: string | null;
        name: string;
        checkIn: string;
        checkOut: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string;
        note: string | null;
        guests: number;
        total: number;
        priceAtBooking: number | null;
        bookingType: string;
        status: string;
    }>;
    findAll(): Promise<({
        villa: {
            name: string;
        } | null;
    } & {
        id: string;
        villaId: string | null;
        name: string;
        checkIn: string;
        checkOut: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string;
        note: string | null;
        guests: number;
        total: number;
        priceAtBooking: number | null;
        bookingType: string;
        status: string;
    })[]>;
    findOne(id: string): Promise<{
        villa: {
            name: string;
            areaObj: {
                name: string;
            } | null;
        } | null;
    } & {
        id: string;
        villaId: string | null;
        name: string;
        checkIn: string;
        checkOut: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string;
        note: string | null;
        guests: number;
        total: number;
        priceAtBooking: number | null;
        bookingType: string;
        status: string;
    }>;
    updateStatus(id: string, status: string): Promise<{
        id: string;
        villaId: string | null;
        name: string;
        checkIn: string;
        checkOut: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string;
        note: string | null;
        guests: number;
        total: number;
        priceAtBooking: number | null;
        bookingType: string;
        status: string;
    }>;
    update(id: string, updateDto: Record<string, any>): Promise<{
        villa: {
            name: string;
            areaObj: {
                name: string;
            } | null;
        } | null;
    } & {
        id: string;
        villaId: string | null;
        name: string;
        checkIn: string;
        checkOut: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string;
        note: string | null;
        guests: number;
        total: number;
        priceAtBooking: number | null;
        bookingType: string;
        status: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        villaId: string | null;
        name: string;
        checkIn: string;
        checkOut: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string;
        note: string | null;
        guests: number;
        total: number;
        priceAtBooking: number | null;
        bookingType: string;
        status: string;
    }>;
}
