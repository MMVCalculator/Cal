'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const crops = [
  { name: 'TOMATO', multiplier: 1, image: 'https://tkkcalculator.site/_next/image?url=https%3A%2F%2Fcommumorning.firebaseapp.com%2Ficons%2Fseed_tomato.png&w=96&q=75' },
  { name: 'CORN', multiplier: 1, image: 'https://tkkcalculator.site/_next/image?url=https%3A%2F%2Fcommumorning.firebaseapp.com%2Ficons%2Fseed_corn.png&w=96&q=75' },
  { name: 'CABBAGE', multiplier: 1, image: 'https://tkkcalculator.site/_next/image?url=https%3A%2F%2Fcommumorning.firebaseapp.com%2Ficons%2Fseed_cabbage.png&w=96&q=75' },
  { name: 'CARROT', multiplier: 6, image: 'https://tkkcalculator.site/_next/image?url=https%3A%2F%2Fcommumorning.firebaseapp.com%2Ficons%2Fseed_carrot.png&w=96&q=75' },
  { name: 'COFFEE', multiplier: 1, image: 'https://tkkcalculator.site/_next/image?url=https%3A%2F%2Fcommumorning.firebaseapp.com%2Ficons%2Fseed_coffee.png&w=96&q=75' },
  { name: 'FISHFOOD', multiplier: 8, image: 'https://tkkcalculator.site/_next/image?url=https%3A%2F%2Fcommumorning.firebaseapp.com%2Ficons%2Fseed_fishfood.png&w=96&q=75' },
  { name: 'BLUEBERRY', multiplier: 4, image: 'https://tkkcalculator.site/_next/image?url=https%3A%2F%2Fcommumorning.firebaseapp.com%2Ficons%2Fseed_blueberry.png&w=96&q=75' },
];

const multipliers = [1, 2, 3, 4, 5, 6, 8, 9, 12];

export default function Home() {
  const [selectedCrop, setSelectedCrop] = useState(crops[0]);
  const [selectedMultiplier, setSelectedMultiplier] = useState(1);
  const [seedCount, setSeedCount] = useState('0.00');
  const [totalLiquidity, setTotalLiquidity] = useState('177,813');

  return (
    <main className="min-h-screen bg-[#1e2124] text-white p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Farming Calculator</h1>
        
        <div className="flex justify-center mb-8">
          {selectedCrop && (
            <Image
              src={selectedCrop.image}
              alt={selectedCrop.name}
              width={96}
              height={96}
              className="rounded-lg"
            />
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {crops.map((crop) => (
            <Button
              key={crop.name}
              onClick={() => setSelectedCrop(crop)}
              className={cn(
                'h-16 text-lg font-medium rounded-lg transition-colors',
                selectedCrop.name === crop.name
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-[#2c2f33] hover:bg-[#34373c]'
              )}
            >
              {crop.name}
            </Button>
          ))}
        </div>

        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {multipliers.map((multiplier) => (
            <Button
              key={multiplier}
              onClick={() => setSelectedMultiplier(multiplier)}
              disabled={selectedCrop.multiplier !== 1 && multiplier !== selectedCrop.multiplier}
              className={cn(
                'w-12 h-12 text-lg font-medium rounded-lg transition-colors',
                selectedMultiplier === multiplier
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-[#2c2f33] hover:bg-[#34373c]',
                selectedCrop.multiplier !== 1 && multiplier !== selectedCrop.multiplier
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              )}
            >
              {multiplier}X
            </Button>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">จำนวน SEED ที่จะปลูก</label>
            <div className="flex gap-2">
              <Input
                type="text"
                value={seedCount}
                onChange={(e) => setSeedCount(e.target.value)}
                className="bg-[#2c2f33] border-[#34373c] text-white"
              />
              <Button className="w-24 bg-[#2c2f33] hover:bg-[#34373c]">SEED</Button>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm">Total Liquidity</label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">อยู่ตรงไหน?</a>
            </div>
            <div className="flex gap-2">
              <Input
                type="text"
                value={totalLiquidity}
                onChange={(e) => setTotalLiquidity(e.target.value)}
                className="bg-[#2c2f33] border-[#34373c] text-white"
              />
              <Button className="w-24 bg-[#2c2f33] hover:bg-[#34373c]">SEEDS</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={selectedCrop.image}
                  alt="Produce Rate"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm">Produce Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">-</span>
                <span className="text-sm">Crops/Day</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={selectedCrop.image}
                  alt="48 hours earn"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm">48 hours earn</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">-</span>
                <span className="text-sm">Crops</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  🌙
                </div>
                <span className="text-sm">Sell to KYLE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">-</span>
                <span className="text-sm">LUMI</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">Estimated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">-</span>
                <span className="text-sm">THB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}