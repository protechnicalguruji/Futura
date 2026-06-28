import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function FloatingUI() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            <button className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"><MessageCircle /></button>
            <button className="bg-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"><Phone /></button>
            <button onClick={scrollToTop} className="bg-text-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"><ArrowUp /></button>
        </div>
    )
}
