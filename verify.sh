#!/bin/bash

echo "🔍 Verifying TradeSync-Site Deployment"
echo "====================================="

echo "1. Testing GitHub Pages URL..."
echo "   URL: https://YOUR_USERNAME.github.io/TradeSync-Site/"
curl -s -o /dev/null -w "   Status: %{http_code} (should be 200)\n" https://praneit.github.io/TradeSync-Site/ 2>/dev/null || echo "   Status: Could not connect (DNS not set or Pages not enabled)"

echo ""

echo "2. Testing custom domain (after DNS setup)..."
echo "   URL: https://arcjet-fintech.com/"
curl -s -o /dev/null -w "   Status: %{http_code} (should be 200 after DNS propagates)\n" https://arcjet-fintech.com/ 2>/dev/null || echo "   Status: Could not connect (DNS propagating or not set)"

echo ""

echo "3. Testing specific pages..."
PAGES=("/" "/#/terms" "/#/about" "/#/contacts")
for page in "${PAGES[@]}"; do
    echo "   Testing: $page"
    curl -s -o /dev/null -w "   Status: %{http_code}\n" "https://praneit.github.io/TradeSync-Site$page" 2>/dev/null || echo "   Status: Could not connect"
done

echo ""
echo "📝 Status Guide:"
echo "   ✅ 200 = Working perfectly"
echo "   ❌ 404 = GitHub Pages not enabled or DNS not set"
echo "   ⚠️  DNS propagation can take 1-24 hours"
echo ""
echo "🔧 If you see 404s:"
echo "   1. Enable GitHub Pages in repository Settings > Pages"
echo "   2. Set source to 'gh-pages' branch"
echo "   3. Add custom domain 'arcjet-fintech.com'"
echo "   4. Update GoDaddy DNS as instructed above"
