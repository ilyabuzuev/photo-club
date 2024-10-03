export interface UsersFromDB {
  total: number;
  documents: {
    $collectionId: string;
    $createdAt: string;
    $databaseId: string;
    $id: string;
    $permissions: string[];
    $updatedAt: string;
    firstname: string;
    lastname: string;
    id: string;
  }[];
}
