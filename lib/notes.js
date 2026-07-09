import fs from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'notes.json');

export function getNotes() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'));
  } catch {
    return [];
  }
}

export function getNote(id) {
  return getNotes().find((n) => n.id === id);
}

export function saveNotes(notes) {
  fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
}
