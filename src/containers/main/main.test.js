import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import MainContainer from './index';
import { Container } from './main.styles';

describe("Folder layout user interactions", () => {
    test("Should open context menu", async () => {
        render(<MainContainer folders={[{id:0,name:"mock",parent:-1}]} />);
        fireEvent.contextMenu(document.querySelector(".folder-layout"));
        await waitFor(() => {
            expect(screen.getByText("Create folder")).toBeInTheDocument();
        })
        
    });

    test("Should move folders around the canvas", async () => {
        render(<MainContainer folders={[{id:0,name:"mock",parent:-1}]} />);
        fireEvent.drag(screen.getByText("mock"),{
            dataTransfer:{
                id:0
            }
        });
        expect(screen.getByText("mock")).toBeInTheDocument();
    })
})