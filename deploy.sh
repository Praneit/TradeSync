#!/bin/bash

echo "🚀 Deploying TradeSync-Site to GitHub Pages"
echo "==========================================="

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create gh-pages branch
    echo "🔄 Creating gh-pages branch..."
    git branch -D gh-pages 2>/dev/null || true
    git checkout --orphan gh-pages
    
    # Clean and copy dist contents
    git rm -rf . 2>/dev/null || true
    git clean -fd
    cp -r dist/* .
    rm -rf dist
    
    # Commit and push
    git add .
    git commit -m "Deploy to GitHub Pages - $(date)"
    git push origin gh-pages --force
    
    # Return to main
    git checkout main
    
    echo ""
    echo "✅ Deployment complete!"
    echo "🌐 Your site will be at:"
    echo "   https://YOUR_USERNAME.github.io/TradeSync-Site/"
    echo ""
    echo "📝 Next steps:"
    echo "1. Go to repository Settings > Pages"
    echo "2. Change source to 'Deploy from a branch'"
    echo "3. Select 'gh-pages' branch and '/' folder"
    echo "4. Add custom domain: arcjet-fintech.com"
    
else
    echo "❌ Build failed! Check for errors above."
    exit 1
fi
