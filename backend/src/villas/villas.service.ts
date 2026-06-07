import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Villa } from '../shared/types';

@Injectable()
export class VillasService {
  private readonly dataPath = path.join(process.cwd(), 'src/data/villas.json');

  private readVillas(): Villa[] {
    const raw = fs.readFileSync(this.dataPath, 'utf-8');
    return JSON.parse(raw);
  }

  private writeVillas(villas: Villa[]) {
    fs.writeFileSync(this.dataPath, JSON.stringify(villas, null, 2), 'utf-8');
  }

  findAll(): Villa[] {
    return this.readVillas();
  }

  findOne(slug: string): Villa {
    const villas = this.readVillas();
    const villa = villas.find((v) => v.slug === slug);
    if (!villa) {
      throw new NotFoundException(`Villa with slug ${slug} not found`);
    }
    return villa;
  }

  save(villa: Villa): Villa {
    const villas = this.readVillas();
    const existingIndex = villas.findIndex((v) => v.id === villa.id);
    
    if (existingIndex >= 0) {
      villas[existingIndex] = villa;
    } else {
      villas.push(villa);
    }

    this.writeVillas(villas);
    return villa;
  }

  delete(id: string): void {
    let villas = this.readVillas();
    villas = villas.filter((v) => v.id !== id);
    this.writeVillas(villas);
  }
}
