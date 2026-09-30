import { useState } from 'react';
import faq from '../../assets/img/faq.png';
export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [
    {
      title: 'lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      title: 'lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      title: 'lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      title: 'lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      title: 'lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
  ];
  return (
    <div className="faq-component flex">
        <div className="flex-3">
            <div className="title-style">Frequently asked questions.</div>
            <div className="faq-accordion">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                <div
                    key={index}
                    className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                >
                    <button
                    type="button"
                    className="faq-item-trigger"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    >
                    <span className="faq-item-title p-style">{item.title}</span>
                    <span className="faq-item-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                    </span>
                    </button>
                    {isOpen && (
                    <div className="faq-item-content">
                        <p className="p-style">{item.content}</p>
                    </div>
                    )}
                </div>
                );
            })}
            </div>
        </div>
        <div className="faq-container flex-2">
          <img src={faq} alt="FAQ" />
        </div>
    </div>
  );
}