import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiContentCopy } from '@mdi/js';

interface CodeBlockProps {
  content: string;
}

function CodeBlock({ content }: CodeBlockProps) {
  const [copySuccess, setCopySuccess] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleClick = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(content);
      } else {
        // Fucking chat gpt hack/fix because it seems that we haven't evolved past the point of making the copy functionality easy to implement for both desktop and mobile devices - fuck you internet
        const textarea = document.createElement('textarea');
        textarea.value = content;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1200);
    } catch (err) {
      console.error('Failed to copy snippet content: ', err);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="p-5 max-w-full relative flex justify-start items-start font-medium border border-zinc-500/50 rounded-2xl whitespace-nowrap"
    >
      <span
        className={`
            py-1 px-2 absolute -top-10 right-0 bg-zinc-50 border border-zinc-500/50 rounded-xl transition-opacity duration-150 ease-in-out
            dark:bg-zinc-950
            ${copySuccess ? 'opacity-100' : 'opacity-0'}
          `}
      >
        Copied!
      </span>
      <span
        className={`absolute top-2 right-10 z-40  transition-opacity duration-200 ease-in-out
          ${isHover ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <button
          onClick={handleClick}
          type="button"
          className="p-1 fixed bg-zinc-600/50 rounded
          
          "
        >
          <Icon path={mdiContentCopy} size={0.8} />
        </button>
      </span>
      <div className="w-full overflow-x-auto">
        <p className="w-full">{content}</p>
      </div>
    </div>
  );
}

export default CodeBlock;
