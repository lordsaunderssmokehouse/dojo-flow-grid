import { BrandButton } from '@/components/BrandButton';
import { Printer } from 'lucide-react';

export default function PrintGup() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      {/* Screen-only header */}
      <div className="mb-8 print:hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-semibold text-foreground mb-2">Gup Requirements</h1>
            <p className="text-muted-foreground">Print-friendly study sheet</p>
          </div>
          <BrandButton onClick={handlePrint}>
            <Printer className="h-4 w-4" />
            Print to PDF
          </BrandButton>
        </div>
      </div>

      {/* Printable content */}
      <div className="print:text-black">
        {/* Print header */}
        <div className="hidden print:block mb-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Tang Soo Do Gup Requirements</h1>
          <p className="text-sm">Storming the Castle Training Materials</p>
        </div>

        {/* 10th Gup - White Belt */}
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xl font-semibold mb-3 pb-2 border-b-2 border-midnight-700">10th Gup - 흰 띠 (White Belt)</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Basic Techniques (기본 동작)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>중단 정권 지르기 (Joong Dan Jung Kwon Jirugi) - Middle punch</li>
              <li>상단 정권 지르기 (Sang Dan Jung Kwon Jirugi) - High punch</li>
              <li>하단 수도 마키 (Ha Dan Soo Do Mahkee) - Low knife hand block</li>
              <li>정면 앞차기 (Jung Myun Ahp Cha Gi) - Front snap kick</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Forms (형)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>기초 형 일보 (Gicho Hyung Il Bo) - Basic Form #1</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">One Steps (일수식 대련)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>일수식 대련 #1, #2, #3</li>
            </ul>
          </div>
        </section>

        {/* 9th Gup - Orange Belt */}
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xl font-semibold mb-3 pb-2 border-b-2 border-midnight-700">9th Gup - 주황 띠 (Orange Belt)</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Basic Techniques (기본 동작)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>중단 외수도 마키 (Joong Dan Wae Soo Do Mahkee) - Middle knife hand block</li>
              <li>상단 외수도 마키 (Sang Dan Wae Soo Do Mahkee) - High knife hand block</li>
              <li>옆차기 (Yup Cha Gi) - Side kick</li>
              <li>돌려차기 (Dollyo Cha Gi) - Roundhouse kick</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Forms (형)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>기초 형 이보 (Gicho Hyung Ee Bo) - Basic Form #2</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">One Steps (일수식 대련)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>일수식 대련 #4, #5, #6</li>
            </ul>
          </div>
        </section>

        {/* 8th Gup - Green Belt */}
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xl font-semibold mb-3 pb-2 border-b-2 border-midnight-700">8th Gup - 녹 띠 (Green Belt)</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Basic Techniques (기본 동작)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>중단 안수도 마키 (Joong Dan Ahn Soo Do Mahkee) - Middle inside knife hand block</li>
              <li>뒤차기 (Dwi Cha Gi) - Back kick</li>
              <li>후려차기 (Hu Ryo Cha Gi) - Hook kick</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Forms (형)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>기초 형 삼보 (Gicho Hyung Sam Bo) - Basic Form #3</li>
              <li>평안 초단 (Pyung Ahn Cho Dan) - Peaceful Confidence #1</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">One Steps (일수식 대련)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>일수식 대련 #7, #8, #9</li>
            </ul>
          </div>
        </section>

        {/* 7th Gup - Red Belt */}
        <section className="mb-8 break-inside-avoid">
          <h2 className="text-xl font-semibold mb-3 pb-2 border-b-2 border-midnight-700">7th Gup - 팔간 띠 (Red Belt)</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Basic Techniques (기본 동작)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>360도 돌려차기 (Sam Baek Yook Ship Do Dollyo Cha Gi) - 360 roundhouse</li>
              <li>뛰어 앞차기 (Tui Ah Ahp Cha Gi) - Jump front kick</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Forms (형)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>평안 이단 (Pyung Ahn Ee Dan) - Peaceful Confidence #2</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">One Steps (일수식 대련)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>일수식 대련 #10, #11, #12</li>
            </ul>
          </div>
        </section>

        {/* Print footer */}
        <div className="hidden print:block mt-12 pt-4 border-t text-xs text-center">
          <p>© Storming the Castle Training Materials</p>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:block {
            display: block !important;
          }
          
          .print\\:text-black {
            color: black !important;
          }
          
          .break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
