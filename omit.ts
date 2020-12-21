// Omit (taking out)
interface DisplayProperties{
    width:number;
    height:number;
    number_of_pixels:number;
    firmware:string;
    version:string;
    model_name:string;
}


type ScreenProperties = Omit<DisplayProperties, "model_name"|"firmware"|"version"|"number_of_pixels">

// ScreenProperties will remain only width/height