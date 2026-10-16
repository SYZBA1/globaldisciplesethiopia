import React from 'react';

export const TransformationSection: React.FC = () => {
  return (
    <section className="bg-white pt-20 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title matching Screenshot 5 */}
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-14">
          How communities are transformed
        </h2>

        {/* 3 Columns matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1 */}
          <div className="flex flex-col">
            <span className="font-serif font-bold text-6xl sm:text-7xl text-gd-pink leading-none mb-4">
              1
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 mb-3 leading-snug">
              We equip churches to launch local training programs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We partner with local churches and equip them with practical training they provide for their own people and support through their own resources.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <span className="font-serif font-bold text-6xl sm:text-7xl text-gd-pink leading-none mb-4">
              2
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 mb-3 leading-snug">
              They train and send their people to least-reached areas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              It starts when a group of cooperating churches chooses a director to lead a phase of training in discipleship, small business, or leadership. Global Disciples Alliance Ethiopia then prepares each director to equip their people.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <span className="font-serif font-bold text-6xl sm:text-7xl text-gd-pink leading-none mb-4">
              3
            </span>
            <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-900 mb-3 leading-snug">
              Disciples and locally sustainable fellowships are multiplied
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We see these three phases of training—discipleship, small business, or leadership—as interlocking parts in a greater strategy to multiply disciples and churches among least-reached people. When all three phases of training work together, we see significant and lasting multiplication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
