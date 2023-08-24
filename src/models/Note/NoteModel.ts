import Realm from 'realm';

export const FolderSchema = {
  name: 'Folder',
  primaryKey: 'id',
  properties: {
    id: 'int',
    folderName: 'string',
    notes: 'Note[]',
  },
};

export const NoteSchema = {
  name: 'Note',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: 'string',
    content: 'string',
    date: 'date',
  },
};

const realm = new Realm({ schema: [FolderSchema, NoteSchema] });

export default realm;
