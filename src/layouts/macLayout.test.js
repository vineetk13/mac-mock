
import { createFolder, deleteFolder, duplicateFolder } from './macLayout';


describe("Mac Layout tests", () => {
        let folders = [];
        let topStack = -1;
        test("Should create new folders", () => {
            folders = createFolder(folders,topStack);
            expect(folders).toContainEqual({id:0,name:"Folder 1",parent:-1});
            folders = createFolder(folders,topStack);
            // console.log(folders);
            expect(folders.length).toBeGreaterThanOrEqual(2);
        });
       
        test("Should delete a folder", () => {
            const initialSize = folders.length;
            folders = deleteFolder(1, folders);
            expect(folders.length).toBeLessThan(initialSize);
        });

        test("Should create a duplicate", () => {
            const duplicateOfId = 0;
            folders = duplicateFolder(duplicateOfId, folders);
            const duplicatedFolder = folders.find((f) => f.duplicateOf===duplicateOfId);
            expect(duplicatedFolder).not.toBeNull();
        })
})