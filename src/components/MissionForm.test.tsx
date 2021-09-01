import { fireEvent, render, screen } from "@testing-library/react";
import MissionForm from "./MissionForm";

test('renders button when isFetchingData is false', () => {
    render(<MissionForm isFetchingData={false} />);
    const value = screen.queryByRole("button");
    expect(value).not.toBeNull();
});

test('renders message when isFetchingData is true', () => {
    render(<MissionForm isFetchingData={true} />);
    const value = screen.queryByText(/we are fetching data/i);
    expect(value).not.toBeNull();
})

test('click on the button, we call the the function thats passed to our getData property', () => {
    // Arrange
    const mockGetData = jest.fn(() => ("Jacob"));
    render(<MissionForm getData={mockGetData} 
        isFetchingData={false} />);
    const button = screen.getByRole("button");

    // Act
    fireEvent.click(button);
    fireEvent.click(button);

    // Assert
    expect(mockGetData.mock.calls.length).toBe(2);
})