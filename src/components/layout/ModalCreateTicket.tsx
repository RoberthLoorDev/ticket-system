import { useAuth } from "../../providers/AuthProvider";
import { useFormCreateTicket } from "../../hooks/useFormCreateTicket";
import { UserInterface } from "../../types/interaces";

interface ModalProps {
    closeModal: () => void;
    infoUser: UserInterface;
}

export default function ModalCreateTicket({ closeModal, infoUser }: ModalProps) {
    const { userId, token } = useAuth();
    if (!userId || !token) return;
    const { handleSubmit, handleChangeForm } = useFormCreateTicket(userId, token);

    return (
        <div>
            <div className="bg-[#161C2C] absolute top-0 left-0 h-screen w-full z-50 bg-opacity-90 flex justify-center">
                <form
                    action=""
                    className="flex flex-col mt-10 w-[637px] h-[439px] bg-[#FFF] rounded-2xl p-8 relative"
                    onSubmit={handleSubmit}
                >
                    <span
                        className="absolute top-3 right-5 text-blackFont text-2xl cursor-pointer"
                        onClick={closeModal}
                    >
                        ✕
                    </span>
                    <h2 className="text-2xl font-semibold mb-3">Crear Ticket</h2>

                    <div className="flex justify-between gap-4">
                        <div className="w-[50%]">
                            <label htmlFor="" className="block">
                                Usuario
                            </label>
                            <input
                                className="w-full h-[30px] bg-[#DDD] outline-none mb-3 indent-3 rounded-md"
                                type="text"
                                disabled
                                placeholder={infoUser?.name}
                            />

                            <label className="block" htmlFor="">
                                Área del solicitante
                            </label>
                            <select
                                name="department"
                                onChange={handleChangeForm}
                                className="w-full h-[30px] bg-[#DDD] outline-none mb-3 indent-3 rounded-md"
                            >
                                <option value="">Seleccione un departamento</option>
                                <option value="Administración">Administración</option>
                                <option value="Finanzas">Finanzas</option>
                                <option value="Recursos Humanos">Recursos Humanos</option>
                                <option value="Ventas">Ventas</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Producción">Producción</option>
                                <option value="Investigación y Desarrollo">Investigación y Desarrollo</option>
                                <option value="Servicio al Cliente">Servicio al Cliente</option>
                                <option value="Logística">Logística</option>
                                <option value="Tecnología de la Información">
                                    Tecnología de la Información
                                </option>
                            </select>

                            <label className="block" htmlFor="">
                                Prioridad
                            </label>
                            <select
                                name="priority"
                                onChange={handleChangeForm}
                                className="w-full h-[30px] bg-[#DDD] outline-none mb-3 indent-3 rounded-md"
                            >
                                <option value="baja">Baja</option>
                                <option value="media">Media</option>
                                <option value="alta">Alta</option>
                            </select>

                            <label className="block" htmlFor="">
                                Asunto
                            </label>
                            <input
                                type="text"
                                name="subject"
                                onChange={handleChangeForm}
                                className="w-full h-[30px] bg-[#DDD] outline-none indent-3 rounded-md"
                            />
                        </div>
                        <div className=" w-[50%]">
                            <label className="block" htmlFor="">
                                Descripción
                            </label>
                            <textarea
                                name="description"
                                onChange={handleChangeForm}
                                className="w-full h-[14.3rem] bg-[#DDD] outline-none p-2 rounded-md resize-none"
                            ></textarea>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-8">
                        <button
                            type="submit"
                            className="bg-[#1195E6] w-[294px] h-[41px] rounded-lg text-white font-medium"
                        >
                            Crear ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
