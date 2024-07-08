import { images } from "../../assets/images/images";

interface Props {
    message: string;
}

export default function IncorrectLogin({ message }: Props) {
    return (
        <div className="h-10  my-4 rounded-lg border-2 border-[#F72829] flex justify-center items-center gap-2">
            <img src={images.icon_error} alt="Error" className="w-auto h-5" />
            <span className="text-sm text-[#F72829] font-medium">{message}</span>
        </div>
    );
}
