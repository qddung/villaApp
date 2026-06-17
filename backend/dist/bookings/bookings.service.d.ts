import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.BookingCreateInput): Promise<{
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
    update(id: string, data: {
        name?: string;
        email?: string;
        phone?: string;
        checkIn?: string;
        checkOut?: string;
        guests?: number;
        villaId?: string;
        note?: string;
        total?: number;
        priceAtBooking?: number;
    }): Promise<{
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
